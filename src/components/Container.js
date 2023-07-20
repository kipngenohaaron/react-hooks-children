import React from "react";

function Container({
  direction = "row",
  header = "",
  textPosition = "left",
  contentPosition = "center",
  children,
}) {
  const styles = {
    container: {
      display: "flex",
      flexDirection: direction,
      alignItems: contentPosition,
      justifyContent: contentPosition,
    },
    textContainer: {
      textAlign: textPosition,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h2>{header}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Container;
