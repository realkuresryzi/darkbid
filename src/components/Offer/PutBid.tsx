import { gql, useMutation, } from "@apollo/client";
import { useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";


interface IPutBid {
  id: number;
  minimalBid: number;
  price: number;
  currency: string;
}

type TParams = { id: string };

export const PutBid: React.FC<IPutBid>  = (props, {match}: RouteComponentProps<TParams>) => {
  const PUT_BID = gql`
    mutation putBid($id: Int!, $price: Int!) {
      update_Offer(where: { id: { _eq: $id } }, _set: { price: $price }) {
        affected_rows
      }
    }
  `;

  const [putBidMutation] = useMutation(PUT_BID);

  const putBid = (price:number, autoupdated:boolean) => {
    putBidMutation({
      variables: { id: props.id, price: price },
      optimisticResponse: true,
    });
    
  };


  const [bid, setBid] = useState("");
  if (Number(bid) + props.price < props.price) {
    console.log("bad");       
}

  return (
    <div className="bid">
      <div className="bid__custom">
        <span className="bid__text">Enter the bid: </span>
        <input
          className="bid__ammount"
          type="number"
          placeholder="Ammount"
          value={bid}
          onChange={(e) => setBid(e.target.value)}
        />
        <input
          className="bid__submit-button"
          type="submit"
          value="Bid"
          onClick={() => (Number(bid) >= props.minimalBid + props.price ? putBid(Number(bid), false): putBid((props.price + props.minimalBid), true))}
        />
      </div>
      <div className="bid__minimal">
        <span className="bid__text">Minimal bid: </span>
        <span className="bid__ammount bid__ammount--min">
          +{props.minimalBid}
        </span>
        <input
          className="bid__submit-button"
          type="submit"
          value="+"
          onClick={() => (putBid(Number(props.price + props.minimalBid), true))}
        />
        
      </div>
    </div>
  );
};
