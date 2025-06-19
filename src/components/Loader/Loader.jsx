import { ClipLoader } from 'react-spinners';
import css from './Loader.module.css';

export default function Loader() {
  return (
   <div className={css.loader} style={{ textAlign: 'center', marginTop: '16px' }}>
      <ClipLoader color="#6b4075" size={50} />
    </div>
  );
}

