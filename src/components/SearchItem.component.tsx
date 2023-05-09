type SearchItemProps = {
  setSearchItemsQuery: React.Dispatch<React.SetStateAction<string>>;
};
export const SearchItem = ({setSearchItemsQuery} : SearchItemProps) => {
  
  function searchItems(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchItemsQuery(e.target.value)
  }
  
  return (
    <div className="d-flex justify-content-center">    
      <input className="form-control w-75 mt-4" type="search" placeholder="Search items" onChange={searchItems}/>
    </div>
  )
}
