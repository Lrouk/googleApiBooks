// import React, { useState } from 'react';

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState('');

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     onSearch(query);
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <input
//         type="text"
//         value={query}
//         onChange={handleInputChange}
//         placeholder="Search..."
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export default SearchBar;
