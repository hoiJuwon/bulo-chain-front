function GraveInfo({data}) {
    return (
        <>
          <div>{data?.name}</div>
          <div>{data?.note}</div>
          <div>{data?.birth}</div>
          <div>{data?.x}</div>
          <div>{data?.y}</div>
          <div>{data?.tokenId}</div>
        </>
    )
}
export default GraveInfo;