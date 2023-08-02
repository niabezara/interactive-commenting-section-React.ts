export default function newComponent(OriginalComponent: any) {
  return (props) => {
    const style = { backgroundColor: "red" };
    return <OriginalComponent style={style} {...props} />;
  };
}
