import { Meteor } from "meteor/meteor";
import TasksCollection from "/imports/collections/Tasks";

Meteor.startup(() => {
  TasksCollection.remove({});
  TasksCollection.insert({
    description: "Think about a new website for my company",
    details: "Our goal must be very clear"
  });
  TasksCollection.insert({
    description: "Choose a new template",
    details: "We want something dark"
  });
  TasksCollection.insert({
    description: "Write the texts",
    details: "Think about why while writing"
  });
  TasksCollection.insert({
    description: "Implement in JS",
    details: "Try to have the fastest website ever"
  });
});