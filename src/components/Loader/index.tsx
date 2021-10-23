import ReactLoader, {
  LoaderProps as ReactLoaderProps,
} from 'react-loader-spinner';

type LoaderProps = ReactLoaderProps & {
  type: string;
  color: string;
  width: number;
  height: number;
};

export function Loader({
  type,
  color,
  width,
  height,
  timeout,
  ...props
}: LoaderProps) {
  return (
    <ReactLoader
      {...props}
      type={type || 'Puff'}
      color={color || '#00BFFF'}
      height={width || 100}
      width={height || 100}
      timeout={0}
    />
  );
}
