import React from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import 'highlight.js/styles/default.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);

class CodeBlock extends React.Component {
  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    const nodes = document.querySelectorAll('pre code');
    nodes.forEach(node => hljs.highlightBlock(node));
  }

  render() {
    const { language, children } = this.props;

    return (
      <pre>
        <code className={`language-${language}`}>
          <xmp>
            {children}
          </xmp>
        </code>
      </pre>
    );
  }
}

export default CodeBlock;
