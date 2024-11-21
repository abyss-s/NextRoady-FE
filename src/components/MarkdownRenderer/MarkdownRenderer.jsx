import React from 'react';
import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';

const MarkdownRenderer = ({ markdown }) => {
  return (
    <div>
      <ReactMarkdown>
        {/* <ReactMarkdown remarkPlugins={[remarkGfm]}> */}
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
