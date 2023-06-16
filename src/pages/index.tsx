import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import TaskInput from "@/components/TaskInput";
import OtherTaskInput from "@/components/OtherTaskInput";
import TodoItem, { Todo } from "@/components/TodoItem";

let defaultTodoItems: Todo[] = [
  {
    Id: "First",
    Task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus faucibus nulla, ut molestie enim pellentesque nec. Nam pellentesque varius libero, a placerat nunc imperdiet a. Proin vestibulum purus vel purus pellentesque consectetur ac i",
    completed: false,
  },
  {
    Id: "Second",
    Task: "Nulla at feugiat sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean bibendum urna diam, eu elementum ex scelerisque ac. Mauris sodales quam vel nisi molestie, quis cursus ligula fermentum. Nulla vel tellus eget ante mollis suscipit nec vel erat. ",
    completed: false,
  },
];

export default function Home() {

const [todoItems, setTodoItems] = useState<Todo[]>(defaultTodoItems);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.AppHeader}>
          <h1>Todo - Patrick</h1>
          <OtherTaskInput createItem={function (todoItem: Todo): void {
            throw new Error("Function not implemented.");
          } }></OtherTaskInput>
        </div>
        <div className={styles.Input}>
        </div>
        <div className={styles.ItemsContainer}>
        <AnimatePresence mode="popLayout">
            {todoItems.map((item) => (
              <motion.div
                layout
                layoutScroll
                key={item.Id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <TodoItem
                  item={item}
                ></TodoItem>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}
