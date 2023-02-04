import React, { useEffect } from "react";
import styled from "styled-components";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
export default function Backdrop() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '40px',
          color: '#d49733',
          width: '50px',
          height: '50px',
          backgroundColor:'transparent',
          border: 'none'
        }}
      >
        <ArrowUpCircleIcon />
      </button>
    </div>
  )
}

