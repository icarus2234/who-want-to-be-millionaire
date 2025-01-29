import { Typography } from '@/modules/layout';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography>Loading...</Typography>
    </div>
  );
};

export default Loading;
