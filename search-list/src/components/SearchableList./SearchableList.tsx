import React, { useState } from "react";

interface ISearchableList {
  list: Array<IListItem>;
}

interface IListItem { 
  title: string;
  id: string;
}

export const SearchableList = (props: ISearchableList): React.ReactNode => {
  const { list } = props;
  const [searchString, setSearchString] = useState("");
  const handleSearch = (event: { target: { value: string; }; }) => {
    setSearchString(event.target.value);
  }
  const filteredList = list.filter((item) => 
    item.title.toLowerCase().includes(searchString.toLowerCase()));
  

  return (
    <div>
      <label>
        <span>Search</span>
        <input type="text" value={searchString} onChange={handleSearch}/>
      </label>
      <ul>
        {list.length ? (
          filteredList.map((listItem: IListItem) => (
            <li key={listItem.id}>{listItem.title}</li>
          ))
        ) : (
          <li>List is empty yet</li>
        )}
      </ul>
    </div>
  );
};
