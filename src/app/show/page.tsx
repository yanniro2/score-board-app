"use client";
import { useEffect } from "react";

const InsightPage = () => {
  const openFullScreenWindow = () => {
    if (window) {
      const width = window.screen.width;
      const height = window.screen.height;
      const features = `width=${width},height=${height},fullscreen=yes,menubar=no,toolbar=no,location=no,personalbar=no,status=no,scrollbars=no,resizable=no`;
      // Opens a new window in full screen without toolbars, scrollbars, etc.
      var myWindow = window.open(
        "https://score-board-app-two.vercel.app/",
        "_blank",
        features
      );
      // if (myWindow) {
      //   // You can dynamically add content to the new window here if needed
      //   myWindow.document.write(
      //     "<div style='text-align: center; margin-top: 40%;'><button onclick='window.close()'>Close Window</button></div>"
      //   );
      // }
    }
  };

  useEffect(() => {
    // Check if the window object is available before using it
    if (window) {
      // Your code that involves the window object
    }
  }, []);

  return (
    <div className="flex w-screen h-screen items-center justify-center text-white">
      <button onClick={openFullScreenWindow}>Open Full Screen Window</button>
    </div>
  );
};

export default InsightPage;
