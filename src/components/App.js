import React from "react";
import Container from "./Container";

function App() {
  return (
    <div>
      <Container
        direction="row"
        header="Header 1"
        textPosition="left"
        contentPosition="center"
      >
        {/* Children for the first Container */}
        <p>Content 1</p>
        <p>More Content 1</p>
      </Container>

      <Container
        direction="column"
        header="Header 2"
        textPosition="center"
        contentPosition="flex-start"
      >
        {/* Children for the second Container */}
        <img src="image1.jpg" alt="Image 1" />
        <img src="image2.jpg" alt="Image 2" />
      </Container>
    </div>
  );
}

export default App;
