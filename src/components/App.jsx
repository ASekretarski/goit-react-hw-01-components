import { Profile } from "./Profile/profile";
import { Statistics } from "./Statistics/statistics"



export const App = () => {
  return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>

    <div>
      <Profile />
      <Statistics />

    </div >
  );
};