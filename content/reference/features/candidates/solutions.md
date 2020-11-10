---
summary: "Digging deeper into solutions"
bodyClass: 'employer-focused'
---

# Solutions Details & Code Playback

Clicking on **SOLUTION DETAILS** opens up the complete history and extended technical details for a particular solution.

<figure>

![Solution Details Dialog](/images/hire/candidate-solution-dialog.png)

</figure>

Once you open up the **SOLUTION DETAILS** dialog, you'll get access to all of the technical details for the challenge and solution.
 
- See the final solution and compare it to the reference solution.
- View the entire output from running the solution.
- If the candidate left any notes about their solution, view them under **Candidate Notes**. 
- Read through the instructions & reviewing guide.
- Review the complete test suite that was used to verify the solution.
- If enabled, view reviews and add in your own.

## Code Playback

During the assessment, regular snapshots are taken of the work being done, which allows you to review the thought process of the developer, plus highlight any questionable activity (such as copying-and-pasting in the entire solution).

### Playback

<figure>

![Solution Playback Controls](/images/hire/candidate-solution-playback-controls.png)

</figure>

To initiate playback, click on the <kbd class="icon-transport-play"></kbd> button.  This will start playing back the solution from the start.  You will also have the following controls to adjust the playback:

- <kbd class="icon-transport-pause"></kbd> : Pause Playback
- <kbd class="icon-transport-previous"></kbd> & <kbd class="icon-transport-next"></kbd> : Step through the solution
- <kbd class="icon-transport-first"></kbd> : Jump to the beginning
- <kbd class="icon-transport-last"></kbd> : Jump to the end
- <kbd>4x</kbd> : Control the playback speed

At any time, you can also click on the playback bar to jump to a specific point in time. Hovering over the playback bar will give you information about the event recorded at that point, including the overall time since the challenge was started, if it was a key event, and noting any compressed playback frames.

<div class="note-box">

#### A Note about Compressed Playback

In general, the playback will occur at the same pace it was recorded, though sped up 2x, 4x, or more.
 
If a developer takes an extended pause (more than a few seconds), the playback is compressed at that point. This helps prevent long, empty stretches where nothing changes. When this happens, you may see the playback timer jump by minutes (or occasionally even hours).

</div>

### Key Frames

To focus in on just the major events during a long assessment, check the _Key Events Only_ checkbox.  This will limit the playback to the following events:

- **Resets:** These happen when the developer chooses to reset the code, tests, or both. Marked with <span class="icon-undo"></span>
- **Sample Tests**: Whenever the developer has chosen to run the code against their own tests. Marked with <span class="icon-ran-tests"></span>
- **Run Attempts:** Whenever the developer has attempted the final tests. Marked with <span class="icon-x"></span> or <span class="icon-checkmark"></span>
- **Large Pastes:** We flag whenever a developer has made a large paste into the editor.  This could be for any number of reasons, so you should review these changes to make sure they were reasonable edits, or that the developer is using their own code (they may be editing outside the browser). Marked with <span class="icon-duplicate"></span>

## Switch Between Solutions

The right-side of the solution playback lets you switch between each solution for the assessment result. You can also learn more about reviewing assessments using the first link (<span class="icon-info"></span>).

If you've decided to create a review, you can use the submit link (<span class="icon-status-submit"></span>) to finalize your review and submit it.
