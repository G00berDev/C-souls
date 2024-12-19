import React, { useState, useEffect } from "react";

const Timer = () => {
const [time, setTime] = useState(0);

useEffect(() => {
const interval = setInterval(() => setTime((prev) => prev + 1), 1000);
return () => clearInterval(interval);
}, []);

return <div>⏱ Time Elapsed: {time} seconds</div>;
};

export default Timer;
