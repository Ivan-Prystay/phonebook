import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{ position: 'absolute', left: '46%', top: '30%' }}>
      <RotatingLines
        strokeColor="Gray"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};
