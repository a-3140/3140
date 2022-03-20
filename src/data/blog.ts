interface Contents {
  id: String;
  title: String;
  dateCreated: Date;
  category: String;
  description: String;
  content: String;
}

export const data: Contents[] = [
  {
    id: "001",
    title: "Flowchart Simplified",
    dateCreated: new Date("March 20, 2022"),
    category: "Tech",
    description:
      "Writing things down when dealing with a complicated task helps us to organize the task and not overflow with information while trying to solve it.",
    content: `
    Writing things down when dealing with a complicated task helps us to organize the task and not overflow with information while trying to solve it.
    <div class="text-lg font-bold my-3">Writing up a flowchart</div>

    <ul class="pl-10">
      <li class="list-disc"> Write states and instruction steps inside rectangles.  </li>
      <li class="list-disc"> Write decision steps, where the process may go different ways, inside diamonds.  </li>
      <li class="list-disc"> Never mix an instruction step with a decision step.  </li>
      <li class="list-disc"> Connect sequential steps with arrows.  </li>
      <li class="list-disc"> Mark the start and end of the process.  </li>
    </ul>

    Example:
    <img src="/assets/flowchart.svg" class="w-full" />
    `,
  },
];
