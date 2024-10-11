import React from 'react';
const BASE_URL = 'https://shikimori.one';
const CommentsList = async ({ id }: { id: string }) => {
  const comments = await fetch(`${BASE_URL}/api/comments/${id}`);
  const data = await comments.json();

  return <div></div>;
};

export default CommentsList;
