import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const newId = router.query.newId;
  
  
  
  return <div>Detail Page.</div>;
};

export default DetailPage;
