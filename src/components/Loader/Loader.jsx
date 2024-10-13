import { PacmanLoader } from "react-spinners";

import Backdrop from '@mui/material/Backdrop';

import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/tasks/selectors";

export default function Loader() {
    const isLoading = useSelector(selectIsLoading);

  const handleClose = () => {
    isLoading(false);
  };
  
  return (
    <div>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
          <PacmanLoader color="#e7d210" />
      </Backdrop>
    </div>)
    
};