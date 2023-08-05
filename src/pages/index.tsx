import useTrans from "@/utils/userTrans";

function Index() {
  const trans = useTrans();

  console.log(trans["common.label.cancel"]);
  console.log(process.env.NEXT_PUBLIC_API_ENDPOINT);
  return <div className="abc">1</div>;
}

export default Index;
