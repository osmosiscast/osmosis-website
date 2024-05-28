import React from "react";

import { useSiteMetadata } from "@/hooks";
import { getContactHref } from "@/utils";

import Contacts from "./../../Sidebar/Contacts/Contacts";

import * as styles from "./Author.module.scss";

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles.author}>
      <p className={styles.bio}> {author.bio} </p>
      <Contacts contacts={author.contacts} />
    </div>
  );
};

export default Author;
