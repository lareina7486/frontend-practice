// ❌ 직접 구현: 로딩, 에러, 데이터를 모두 관리해야 함
function UserProfile({ userId }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    fetchUser(userId)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setIsError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userId]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  
  if (isError) {
    return <div>에러 발생!</div>;
  }
  
  return <div>{data.name}</div>;
}

// ✅ React Query: 데이터 요청과 상태를 훅 리턴값으로 처리
function UserProfile({ userId }) {
  const { data, isPending, error } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUser(userId),
  });

  if (isPending) {
    return <div>로딩 중...</div>;
  }
  
  if (error) {
    return <div>에러 발생!</div>;
  }
  
  return <div>{data.name}</div>;
}