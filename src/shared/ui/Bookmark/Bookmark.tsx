import { PropsWithChildren, FC } from 'react';

interface BookmarkProps {
  className?: string;
}

const Bookmark: FC<PropsWithChildren<BookmarkProps>> = props => {
  return <h2 className={`bookmark ${props.className}`}>{props.children}</h2>;
};

export default Bookmark;
