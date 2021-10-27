import { useState, useCallback } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //ที่ต้องใช้ useCallback เพราะว่า เมื่อเกิดการอัพเดท state ที่ component แม่ function sendRequest ใน CustomHook นี้
  //จะไม่ถูกสร้างขึ้นมาเป็นฟังก์ชั่นใหม่ *function เป็น object ซึ่งถ้าไม่ใช้ useCallback มันจะถูก regis ใน address ใหม่
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      //apply data เป็นฟังก์ชั่นที่ถูกส่งมาจาก component ที่ใช้ useFetch
      //แต่ถูกเรียกใช้ในนี้
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);

    //ไม่มี dependency เพราะว่า requestConfig กับ applyData ถูกเอามารวมไว้ใน function sendRequest แล้ว
    //ที่ Max show ตอนแรก เค้าจะเอา requestConfig กับ applyData ออกมาเป็น state ก่อน
  }, []);

  //return กลับไปเป็น object ก็อย่าลืม decontructure with object
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useFetch;
