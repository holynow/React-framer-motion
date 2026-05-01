import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow:
    0 2px 3px rgba(0, 0, 0, 0.1),
    0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Buttons = styled.div`
  display: flex;
`;
// const Box = styled(motion.div)`
//   width: 200px;
//   height: 200px;
//   background-color: rgba(255, 255, 255, 1);
//   border-radius: 40px;
//   position: absolute;
//   top: 100px;
//   box-shadow:
//     0 2px 3px rgba(0, 0, 0, 0.1),
//     0 10px 20px rgba(0, 0, 0, 0.06);
// `;

// const boxVariants = {
//   initial: {
//     opacity: 0,
//     scale: 0,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     rotateZ: 360,
//   },
//   leaving: {
//     opacity: 0,
//     scale: 0,
//     y: 50,
//   },
// };
const box = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    rotateX: 100,
    transition: {
      duration: 0.3,
    },
  }),
};

const App = () => {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  // const [showing, setShowing] = useState(false);
  // const toggleShowing = () => setShowing((prev) => !prev);
  return (
    <Wrapper>
      {/* <button onClick={toggleShowing}>Click</button> */}
      <AnimatePresence mode="wait" custom={back}>
        {/* {showing ? (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        ) : null} */}
        <Box
          custom={back}
          key={visible}
          variants={box}
          initial="entry"
          animate="center"
          exit="exit"
        >
          {visible}
        </Box>
      </AnimatePresence>
      <Buttons>
        <button onClick={prevPlease}>prev</button>
        <button onClick={nextPlease}>next</button>
      </Buttons>
    </Wrapper>
  );
};

export default App;
