import { Division } from '../index';
import { DefaultItem } from './components';
import { ListProps } from './list.types';

export default function List(props: ListProps) {
  return <Division {...props}>{props.children}</Division>;
}

List.DefaultItem = DefaultItem;
