import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24.303 24.303"
      {...props}
    >
      <path
        d="M10.269 11.298V1.883a1.884 1.884 0 013.766 0v9.415a1.884 1.884 0 01-3.766 0zm9.347-8.537a1.413 1.413 0 00-1.749 2.218 9.196 9.196 0 013.524 7.261c0 5.094-4.145 9.239-9.238 9.239-5.094 0-9.239-4.145-9.239-9.239a9.194 9.194 0 013.521-7.258 1.413 1.413 0 00-1.75-2.218A12.004 12.004 0 00.089 12.24c0 6.652 5.412 12.063 12.063 12.063s12.063-5.412 12.063-12.063c0-3.719-1.677-7.173-4.599-9.479z"
        fill="#030104"
      />
    </svg>
  );
}

export default SvgComponent;