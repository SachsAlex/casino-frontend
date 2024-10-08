import { useState, useEffect, useContext } from "react";
import "./styles/BlackJack.css";
import "./styles/Globals.css";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import data from "./mediathek/deck.json";
import Stand from "./components/player-choices/stand";
import NewGame from "./components/player-choices/newGame/NewGame";
import Hit from "./components/player-choices/hit";
import Chip5 from "./components/chips/chip5/Chip5";
import Chip10 from "./components/chips/chip10/Chip10";
import Chip25 from "./components/chips/chip25/Chip25";
import Chip100 from "./components/chips/chip100/Chip100";
import ChipAll from "./components/chips/chipAll-In/ChipAll";
import bank from "../../mediathek/images/casino-chip.webp";
import { useNavigate } from "react-router-dom";
import UserContext from "../../components/common/userContext";

const BlackJackPage = () => {
  const [deck, setDeck] = useState([]);
  const [dealer, setDealer] = useState(null);
  const [player, setPlayer] = useState(null);
  const [score, setScore] = useState(100);
  const [chipBet, setChipBet] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [currentBet, setCurrentBet] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState(null);
  const [initialData] = useState([...data]);
  const { user, updateGameId, updateScore } = useContext(UserContext);

  useEffect(() => {
    startNewGame();
    updateScore(score);
    updateGameId(1);
  }, []);

  const navigate = useNavigate();

  const handleBank = () => {
    navigate("/bank");
  };

  const generateDeck = () => {
    return [...initialData];
    // Kopiert Elemente des Original Arrays
    // Keine simple Referenz!
  };

  const dealCards = mdeck => {
    const playerCard1 = getRandomCard(mdeck);
    const dealerCard1 = getRandomCard(playerCard1.updatedDeck);
    const playerCard2 = getRandomCard(dealerCard1.updatedDeck);
    const playerStartingHand = [playerCard1.randomCard, playerCard2.randomCard];
    const dealerStartingHand = [dealerCard1.randomCard, { number: 0 }];
    const player = {
      cards: playerStartingHand,
      count: getCount(playerStartingHand),
    };
    const dealer = {
      cards: dealerStartingHand,
      count: getCount(dealerStartingHand),
    };
    return { updatedDeck: playerCard2.updatedDeck, player, dealer };
  };

  const startNewGame = (type = "new") => {
    if (type === "continue") {
      if (score > 0) {
        console.log("InitialData: ", initialData);
        console.log("score: ", score);
        const deckToUse = deck.length < 10 ? generateDeck() : deck;
        const { updatedDeck, player, dealer } = dealCards(deckToUse);
        setDeck(updatedDeck);
        setDealer(dealer);
        setPlayer(player);
        setChipBet(null);
        setCurrentBet(null);
        setGameOver(false);
        setMessage(null);
        setScore(score);
        updateScore(score);
      } else {
        setMessage("Game over! You are broke!\nPlease start a new game.");
      }
    } else {
      const newDeck = generateDeck();
      const { updatedDeck, player, dealer } = dealCards(newDeck);
      setDeck(updatedDeck);
      setDealer(dealer);
      setPlayer(player);
      setScore(100);
      setChipBet(null);
      setInputValue("");
      setCurrentBet(null);
      setGameOver(false);
      setMessage(null);
    }
  };

  const getRandomCard = mdeck => {
    const updatedDeck = mdeck;
    const randomIndex = Math.floor(Math.random() * updatedDeck.length);
    const randomCard = updatedDeck[randomIndex];
    updatedDeck.splice(randomIndex, 1);
    return { randomCard, updatedDeck };
  };

  const placeBetChip = () => {
    const bet = inputValue;
    if (bet > score) {
      setMessage("Insufficient funds to bet that amount.");
    } else if (bet % 1 !== 0) {
      setMessage("Please bet whole numbers only.");
    } else {
      setScore(score - bet);
      setInputValue("");
      setCurrentBet(chipBet);
    }
  };

  const getCount = cards => {
    const rearranged = [];
    cards.forEach(card => {
      if (card.number === "A") {
        rearranged.push(card);
      } else {
        rearranged.unshift(card);
      }
    });

    return rearranged.reduce((total, card) => {
      if (card.number === "J" || card.number === "Q" || card.number === "K") {
        return total + 10;
      } else if (card.number === "A") {
        return total + 11 <= 21 ? total + 11 : total + 1;
      } else {
        return total + Number(card.number);
      }
    }, 0);
  };

  return (
    <div className="background">
      <img
        className="bank"
        src={bank}
        alt="Icon Bank"
        onClick={handleBank}
        title="Go to the Cashier"
      />
      {message && (
        <div className="speechBubbleDealer">
          <div className="welcome">{message}</div>
        </div>
      )}

      <div className="chip5">
        <Chip5
          score={score}
          setScore={setScore}
          chipBet={chipBet}
          setChipBet={setChipBet}
          currentBet={currentBet}
          setCurrentBet={setCurrentBet}
          message={message}
          setMessage={setMessage}
        />
      </div>
      <div className="chip10">
        <Chip10
          score={score}
          setScore={setScore}
          chipBet={chipBet}
          setChipBet={setChipBet}
          currentBet={currentBet}
          setCurrentBet={setCurrentBet}
          message={message}
          setMessage={setMessage}
        />
      </div>
      <div className="chip25">
        <Chip25
          score={score}
          setScore={setScore}
          chipBet={chipBet}
          setChipBet={setChipBet}
          currentBet={currentBet}
          setCurrentBet={setCurrentBet}
          message={message}
          setMessage={setMessage}
        />{" "}
      </div>
      <div className="playerDealer">
        <table className="cards">
          <tbody>
            <tr>
              {dealer?.cards.map((card, i) => (
                <Card key={i} imgSource={card.img} />
              ))}
            </tr>
          </tbody>
        </table>
        <p className="font">Dealer's Hand ({dealer?.count || 0})</p>
        <div className="spacerHands"></div>
        <table className="cards">
          <tbody>
            <tr>
              {player?.cards.map((card, i) => (
                <Card key={i} imgSource={card.img} />
              ))}
            </tr>
          </tbody>
        </table>
        <p className="font">Your Hand ({player?.count || 0})</p>
      </div>
      <div className="chip100">
        <Chip100
          score={score}
          setScore={setScore}
          chipBet={chipBet}
          setChipBet={setChipBet}
          currentBet={currentBet}
          setCurrentBet={setCurrentBet}
          message={message}
          setMessage={setMessage}
        />{" "}
      </div>
      <div className="chipAll">
        <ChipAll
          score={score}
          setScore={setScore}
          chipBet={chipBet}
          setChipBet={setChipBet}
          currentBet={currentBet}
          setCurrentBet={setCurrentBet}
          message={message}
          setMessage={setMessage}
        />
      </div>
      <div className="outerContainer">
        <div className="innerContainer">
          <div className="fontBet">Einsatz: {chipBet}</div>

          <div className="fontScore">Score: {score}</div>
          <div className="spacer"></div>
          <div>
            <Button onClick={placeBetChip} text="Place Bet" />
            <div className="buttons">
              {!currentBet ? <div className="input-bet"></div> : null}
              {gameOver && (
                <div className="buttons">
                  <Button
                    onClick={() => startNewGame("continue")}
                    text="Continue"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="playerChoice">
            <div className="buttonsChoiceLeft">
              <NewGame
                deck={deck}
                setDeck={setDeck}
                dealer={dealer}
                setDealer={setDealer}
                player={player}
                setPlayer={setPlayer}
                score={score}
                setScore={setScore}
                inputValue={inputValue}
                setInputValue={setInputValue}
                chipBet={chipBet}
                setChipBet={setChipBet}
                currentBet={currentBet}
                setCurrentBet={setCurrentBet}
                gameOver={gameOver}
                setGameOver={setGameOver}
                message={message}
                setMessage={setMessage}
                initialData={initialData}
              />
            </div>
            <div className="buttonsChoiceMiddle">
              <Hit
                deck={deck}
                setDeck={setDeck}
                player={player}
                setPlayer={setPlayer}
                currentBet={currentBet}
                setCurrentBet={setCurrentBet}
                gameOver={gameOver}
                setGameOver={setGameOver}
                message={message}
                setMessage={setMessage}
              />
            </div>
            <div className="buttonsChoiceRight">
              <Stand
                deck={deck}
                setDeck={setDeck}
                dealer={dealer}
                setDealer={setDealer}
                player={player}
                setPlayer={setPlayer}
                score={score}
                setScore={setScore}
                currentBet={currentBet}
                setCurrentBet={setCurrentBet}
                gameOver={gameOver}
                setGameOver={setGameOver}
                message={message}
                setMessage={setMessage}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackJackPage;
