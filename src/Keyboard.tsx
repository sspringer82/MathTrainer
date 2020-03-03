import React from 'react';

interface Props {}

const Keyboard: React.FC<Props> = () => {
  return (
    <div>
      <div>
        <button>7</button>
        <button>8</button>
        <button>9</button>
      </div>
      -fixgit c
      <div>
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </div>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </div>
  );
};

export default Keyboard;
