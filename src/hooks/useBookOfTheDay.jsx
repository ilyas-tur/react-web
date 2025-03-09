import { useState, useEffect } from "react";

const ONE_DAY = 86400000;

const useBookOfTheDay = (books) => {
  const [bookOfTheDay, setBookOfTheDay] = useState(null);
  const [expiryTimestamp, setExpiryTimestamp] = useState(null);

  useEffect(() => {
    if (!books || books.length === 0) return;

    const now = Date.now();
    const storedBotd = localStorage.getItem("bookOfTheDay");
    const storedTimestamp = localStorage.getItem("botdTimestamp");

    if (
      storedBotd &&
      storedTimestamp &&
      now - parseInt(storedTimestamp, 10) < ONE_DAY
    ) {
      setBookOfTheDay(JSON.parse(storedBotd));
      setExpiryTimestamp(parseInt(storedTimestamp, 10) + ONE_DAY);
    } else {
      const randomIndex = Math.floor(Math.random() * books.length);
      const newBotd = books[randomIndex];
      localStorage.setItem("bookOfTheDay", JSON.stringify(newBotd));
      localStorage.setItem("botdTimestamp", now.toString());
      setBookOfTheDay(newBotd);
      setExpiryTimestamp(now + ONE_DAY);
    }
  }, [books]);

  return { bookOfTheDay, expiryTimestamp };
};

export default useBookOfTheDay;
