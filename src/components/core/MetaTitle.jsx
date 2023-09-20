import React, { useEffect } from "react";

function MetaTitle({ title }) {
  useEffect(() => {
    document.title = title
  }, [title]);

}

export default MetaTitle;
