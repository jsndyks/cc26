## CreativeCoding 2026 : Page Index [CC26]

<script>
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("table tbody tr").forEach(function (row) {
    const firstCell = row.cells[0];

    if (firstCell && firstCell.textContent.trim() === "00") {
      row.classList.add("session-00");
      firstCell.textContent = "";
    }
  });
});
</script>

<style>
table,
table thead,
table tbody,
table tr,
table th,
table td {
  border: #ffffff 3px solid !important;
  background: #fcfcfc !important;
  box-shadow: none !important;
}

table {
  border-collapse: collapse;
}

table tbody tr.session-00 > td,
table tbody tr.session-00:nth-child(odd) > td,
table tbody tr.session-00:nth-child(even) > td {
  background: none !important;
  background-color: transparent !important;
}
</style>

| session | title                          | pages                                                                                    | status |
| ------: | ------------------------------ | ---------------------------------------------------------------------------------------- | :----: |
|      00 | **CC Home**                    | [homeIntroduction.html](home/homeIntroduction.html)                                      |        |
|      00 |                                | [homeGuidance.html](home/homeGuidance.html)                                              |        |
|      00 |                                | [homeObjectives.html](home/homeObjectives.html)                                          |        |
|      00 | **Preparation**                | [ccTenTasks.html](preparation/ccTenTasks.html)                                           |        |
|      00 |                                | [ccSoundCheck.html](preparation/ccSoundCheck.html)                                       |        |
|      00 |                                | [ccInduction.html](preparation/ccInduction.html)                                         |        |
|      00 |                                | [ccDropIn.html](preparation/ccDropIn.html)                                               |        |
|      00 | **Assessment**                 | [ccAssessment.html](dearData/ccAssessment.html)                                          |   x    |
|      01 | **DearData**                   | [ccDearData.html](dearData/ccDearData.html)                                              |   x    |
|         |                                | [ccDataCollection.html](dearData/ccDataCollection.html)                                  |   x    |
|      02 | **Sketches**                   | [ccSketch.html](sketch/ccSketch.html)      | x                                           |   x    |
|         |                                | [ccSketch.extra.html](sketch/ccSketch.extra.html)   | x                                  |   x    |
|      03 | **Variables**                  | [ccVar.html](variables/ccVar.html)                                                       |   x    |
|         |                                | [ccVar.extra.html](variables/ccVar.extra.html)                                           |   x    |
|      04 | **Decisions**                  | [ccDec.html](decisions/ccDec.html)                                                       |   x    |
|         |                                | [ccDec.extra.html](decisions/ccDec.extra.html)                                           |   x    |
|      04 | **Methods**                    | [ccMethods.html](methods/ccMethods.html)                                                 |   x    |
|         |                                | [ccMethods.extra.html](methods/ccMethods.extra.html)                                     |   x    |
|         |                                | [ccMethods.tenMethodsGame.html](methods/ccMethods.tenMethodsGame.html)                   |   x    |
|      05 | **Interaction**                | [ccInt.html](interaction/ccInt.html)                                                     |   x    |
|         |                                | [ccInt.extra.html](interaction/ccInt.exercises.html)                                     |   x    |
|         |                                | [ccInt.extra.html](interaction/ccInt.extra.html)                                         |   x    |
|      06 | **Loops**                      | [ccLoops.html](loops/ccLoops.html)                                                       |   x    |
|         |                                | [ccLoops.extra.html](loops/ccLoops.extra.html)                                           |   x    |
|      06 | **Groups**                     | [ccGroups.html](groups/ccGroups.html)                                                    |   x    |
|         |                                | [ccGroups.extra.html](groups/ccGroups.extra.html)                                        |   x    |
|      06 | **Dear Data**                   | [??      ]()                                                     |        |
|      07 | **Classes & Objects**          | [ccObjects.html](objects/ccObjects.html)                                                 |   x    |
|         |                                | [ccObjects.extra.html](objects/ccObjects.extra.html)                                     |   x    |
|         |                                | [ccObjects.balls.html](objects/ccObjects.balls.html)                                     |   x    |
|         |                                | [ccObjects.robots.html](objects/ccObjects.robots.html)                                   |   x    |
|      08 | **Images**                     | [ccImages.html](images/ccImages.html)                                                    |   x    |
|         |                                | [ccImages.extra.html](images/ccImages.extra.html)                                        |   x    |
|         |                                | [ccImages.intro.html](images/ccImages.intro.html)                                        |   x    |
|      09 | **Media: Sound & Video**       | [ccMedia.html](media/ccMedia.html)                                                       |        |
|         |                                | [ccMedia.extra.html](media/ccMedia.extra.html)                                           |        |
|         |                                | [ccMedia.soundTest.html](media/ccMedia.soundTest.html)                                   |        |
|      10 | **Data**                       | [ccData.html](data/ccData.html)                                                          |        |
|      11 | **Data Visualization**         | [ccDataVis.html](datavis/ccDataVis.html)                                                 |        |
|         |                                | [ccDataVis.extra.html](datavis/ccDataVis.extra.html)                                     |        |
|      12 | **Creativity**                 | [ccCreativity.html](creativity/ccCreativity.html)                                        |        |
|         |                                | [ccCreativity.scamper.html](creativity/ccCreativity.scamper.html)                        |        |
|      13 | **Art**                        | [ccArt.html](art/ccArt.html)                                                             |        |
|         |                                | [ccArt.extra.html](art/ccArt.extra.html)                                                 |        |
|         |                                | [ccArt.copyright.html](art/ccArt.copyright.html)                                         |        |
|         |                                | [veraMolnar.html](art/veraMolnar.html)                                                   |        |
|      14 | **3D Graphics**                | [ccGraphics.html](3d/ccGraphics.html)                                                    |   x    |
|         |                                | [ccGraphics.extra.html](3d/ccGraphics.extra.html)                                        |   x    |
|         |                                | [ccGraphics.game.html](3d/ccGraphics.game.html)                                          |   x    |
|         |                                | [ccGraphics.gameTemplate.html](3d/ccGraphics.gameTemplate.html)                          |        |
|      15 | **Computational Thinking**     | [ccThinking.html](data/ccThinking.html)                                                  |        |
|      16 | **Dear Data Denouement** | [ccDenouement.html](denouement/ccDenouement.html)                                              |        |
|         |                                | [ccObservationTable.html](denouement/ccObservationTable.html)                            |        |
|         |                                | [ccQandA.html](denouement/ccQandA.html)                                                  |        |

<div style="align:right; text-align:right; padding-right:4rem">

<b>Jason DYKES</b><br/>
<!-- <i>02/09/26</i> -->
<i>15/09/26</i>

</div>

<style>
    tr, table {border:solid 0px}
    td {vertical-align:top; border:solid 0px}
    .footer, h1 {display:none}
    </style>