import React from 'react';
import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';

const MarkdownRenderer = ({ markdown }) => {
  return (
    <div>
      <div className="w-full h-px bg-gray-400 my-4"></div>
      <ReactMarkdown>
        {/* <ReactMarkdown remarkPlugins={[remarkGfm]}> */}
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
