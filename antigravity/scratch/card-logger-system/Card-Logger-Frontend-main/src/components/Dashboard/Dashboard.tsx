"use client";
import React from "react";
import CardDataStats from "../CardDataStats";
import Image from "next/image";
import { useState, useEffect } from 'react';
import axios from "axios";
import Loader from "../common/Loader";
import IDCardStatsChart from "../Charts/IDCardStatsChart";

const Dashboard: React.FC = () => {

    const [totalIDCardsToday, setTotalIDCardsToday] = useState({
        total_cards_for_day: "",
        cards_day_difference_percentage: "",
        card_difference_direction: "up"
    });

    const [totalIDCards, setTotalIDCards] = useState({
        total_cnics: "0",
    });


    const [isLoadingtotalIDCardsToday, setIsLoadingtotalIDCardsToday] = useState(true);
    const [isLoadingtotalIDCards, setIsLoadingtotalIDCards] = useState(true);

    const fetchTotalIDCardsToday = async () => {
        try {
            const response = await axios.get("/api/dashboard/total-id-cards");
            setTotalIDCardsToday(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        finally {
            setIsLoadingtotalIDCardsToday(false);
        }
    };

    const fetchTotalIDCards = async () => {
        try {
            const response = await axios.get("/api/dashboard/total-cnic-count");
            setTotalIDCards(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        finally {
            setIsLoadingtotalIDCards(false);
        }
    }

    useEffect(
        () => {
            fetchTotalIDCardsToday();
            fetchTotalIDCards();
        },
        []
    )

    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                {isLoadingtotalIDCardsToday ? (
                    <Loader />
                ) : (
                    <CardDataStats
                        title="Total ID Cards Today"
                        total={totalIDCardsToday.total_cards_for_day}
                        rate={totalIDCardsToday.cards_day_difference_percentage}
                        levelUp={(totalIDCardsToday.card_difference_direction === "up")}
                        levelDown={(totalIDCardsToday.card_difference_direction === "down")}
                    >
                        <Image src={"/images/icon/id-card.svg"} width={50} height={50} alt="Total ID Cards" />
                    </CardDataStats>

                )}

                {isLoadingtotalIDCards ? (
                    <Loader />
                ) : (
                    <CardDataStats
                        title="Total ID Cards"
                        total={totalIDCards.total_cnics}
                        haveRate={false}
                    >
                        <Image src={"/images/icon/id-card.svg"} width={50} height={50} alt="Total ID Cards" />
                    </CardDataStats>
                )}

                <div className="col-span-1 md:col-span-2 xl:col-span-4 2xl:col-span-4">
                    <IDCardStatsChart />
                </div>


            </div>
        </>
    );
};

export default Dashboard;
