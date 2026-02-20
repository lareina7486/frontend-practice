import { POSTS_PAGE_LIMIT } from './constants';

// 1. API 기본 URL을 정합니다.
const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  'https://learn.codeit.kr/api/codestudit';

// 2. 포스트 목록 조회 함수를 만듭니다.
// Codestudit API의 페이지 기준은 0부터 시작합니다.
export async function getPosts(page = 0, limit = POSTS_PAGE_LIMIT) {
  const response = await fetch(`${BASE_URL}/posts?page=${page}&limit=${limit}`);

  if (!response.ok) {
    throw new Error('Failed to fetch posts.');
  }

  return await response.json();
}

// 3. 사용자별 포스트 목록 조회 함수를 만듭니다.
export async function getPostsByUsername(
  username,
  page = 0,
  limit = POSTS_PAGE_LIMIT,
) {
  const response = await fetch(
    `${BASE_URL}/posts?username=${username}&page=${page}&limit=${limit}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts by username.");
  }

  return await response.json();
}

// 4. 포스트 업로드 함수를 만듭니다.
export async function uploadPost(newPost) {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });

  if (!response.ok) {
    throw new Error("Failed to upload the post.");
  }

  return await response.json();
}

// 5. 유저와 댓글 조회 함수를 준비합니다.
export async function getUserInfo(username) {
  const response = await fetch(
    `${BASE_URL}/users/${username}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user info.");
  }

  return await response.json();
}

// 6. 포스트별 댓글 개수 조회 함수를 만듭니다.
export async function getCommentCountByPostId(postId) {
  const response = await fetch(
    `${BASE_URL}/posts/${postId}/comments`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch comment count.");
  }

  const body = await response.json();
  return body.count;
}

