function GraveInfo({data}) {
    console.log("grave info", data);
    // console.log(data[0]);
    return (
        <>
          <div>name {data?.name}</div>
          <div>{data?.note}</div>
          <div>{data?.birth}</div>
          <div>{data?.x}</div>
          <div>{data?.y}</div>
          <div>{data?.tokenId}</div>
        </>
    )
}
export default GraveInfo;