import Paragraph from "./Paragraph";

function List({type, elements, ordered}) {
  const ch = elements?.flat(1)?.map((e, i) => <li key={i}>
    {(e['type']==="text")&&e['content']}
    {(e['type']==="paragraph")&&<Paragraph {...e}/>}
    {(e['type']==="list")&&<List {...e}/>}
  </li>)
  return ordered ? <ol className="doc_list">{ch}</ol> : <ul className="doc_list">{ch}</ul>;
}

export default List