import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import closeModal from "../images/close.svg";

const FeedbackCard = ({
  id,
  author,
  title,
  description,
  bgcolor,
  textcolor,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const boxStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: 'var(--spacing)*3', // Adjust the gap as needed
    overflow: 'hidden',
    marginTop: 'calc(var(--spacing) * 0.5)',
    paddingBottom: 'var(--spacing)',
    textAlign: 'center',
  };
  

  Modal.setAppElement("#root");

  return (
    <motion.div
      className="feedbackCard"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: id * 0.1 }}
    >
<div className="gridContainer" style={boxStyle}>
  <div className="feedbackCardInner" style={{ display: 'flex', flexDirection: 'column' }}>
    {/* <div className="imageContainers">
      <img src={image} alt="Laptop displaying the application" />
    </div> */}
    <div className="contentContainer" style={{ backgroundColor: bgcolor }}>
      <div className="bubble" style={{ color: textcolor, display: 'flex', flexDirection: 'column' }}>
        <h4 className="title">{title}</h4>
        <p className="description">{description}</p>
        <h3 className="author" style={{ marginTop: 'auto' }}>
          Author: {author}
        </h3>
      </div>
    </div>
  </div>
</div>



      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            backgroundColor: "#101010",
            color: "#9f9f9f",
            padding: "60px",
            display: "flex",
            flexDirection: "column",
            width: "400px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            zIndex: "999",
          },
        }}
      >
        <img
          src={closeModal}
          className="closeMenu closeModal"
          onClick={handleCloseModal}
          alt="Close"
        ></img>
        <h3 className="modalTitle">{title}</h3>
        <h3 className="author">{author}</h3>
        <p className="projectDescription">{description}</p>
      </Modal>
    </motion.div>
  );
};

export default FeedbackCard;
