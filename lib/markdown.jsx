import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import Link from 'next/link';

function RichTextAsset({ id, assets }) {
  const asset = assets?.find((asset) => asset.sys.id === id);

  if (asset?.url) {
    return <Image src={asset.url} layout="fill" alt={asset.description} />;
  }

  return null;
}

export function Markdown({ content }) {
  return documentToReactComponents(content.json, {
    renderMark: {
      [MARKS.CODE]: (text) => {
        return (
          <pre>
            <code>{text}</code>
          </pre>
        );
      },
      [MARKS.BOLD]: (text) => <span className="font-bold">{text}</span>,
      [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
      [MARKS.UNDERLINE]: (text) => <span className="underline">{text}</span>,
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <RichTextAsset
          id={node.data.target.sys.id}
          assets={content.links.assets.block}
        />
      ),
      [BLOCKS.PARAGRAPH]: (node, children, index) => {
        if (
          node.content.find((item) =>
            item.marks?.find((mark) => mark.type === 'code')
          )
        ) {
          return (
            <div>
              <pre>
                <code>{children}</code>
              </pre>
            </div>
          );
        }
        return <p>{children}</p>;
      },

      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2 id={`section-${children}`}>{children}</h2>;
      },

      [INLINES.ENTRY_HYPERLINK]: (node) => {
        if (node.data.target.sys.contentType.sys.id === 'post') {
          return (
            <Link href={`/posts/${node.data.target.fields.slug}`}>
              {node.data.target.fields.title}
            </Link>
          );
        }
      },

      [INLINES.HYPERLINK]: (node) => {
        const text = node.content.find(
          (item) => item.nodeType === 'text'
        )?.value;
        return (
          <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        );
      },

      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        if (node.data.target.sys.contentType.sys.id === 'videoEmbed') {
          return (
            <iframe
              height="400"
              width="100%"
              src={node.data.target.fields.embedUrl}
              title={node.data.target.fields.title}
              allowFullScreen={true}
            />
          );
        }
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        if (
          node.content.find((item) =>
            item.marks?.find((mark) => mark.type === 'code')
          )
        ) {
          return (
            <li>
              <div className="overflow-x-auto max-w-lg">
                <pre className="overflow-x-auto max-w-lg">
                  <code>{children}</code>
                </pre>
              </div>
            </li>
          );
        }
        return <li>{children}</li>;
      },
    },
  });
}
