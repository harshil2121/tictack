import React, { useState } from "react";
import "../App.css";

function Tictac() {
  const [game, setGame] = useState([
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ]);

  const [player, setPlayer] = useState(1);

  const handleClick = (i1, i2) => {
    console.log("i1 - " + i1 + " i2 - " + i2);
    let newGame = game;
    if (player === 1) {
      console.log("Changing");
      newGame[i1][i2] = "X";
      setGame(newGame);
    } else {
      console.log("Changing");
      newGame[i1][i2] = "O";
      setGame(newGame);
    }
    console.log(game);
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table style={{ alignItems: "center" }}>
          <tbody>
            {game && game.length > 0
              ? game.map((item, index1) => {
                  return (
                    <tr key={index1}>
                      {item.map((value, index2) => {
                        return (
                          <td>
                            {parseInt(game[index1][index2]) !== -1 ? (
                              value
                            ) : (
                              <button
                                key={index2}
                                onClick={(e) => handleClick(index1, index2)}
                              >
                                {" "}
                                click
                              </button>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Tictac;
