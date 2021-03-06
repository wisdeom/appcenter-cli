/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a TestReportFeaturesItemTestsItemRunsItemStepsItemStepExecutionsItem.
 */
class TestReportFeaturesItemTestsItemRunsItemStepsItemStepExecutionsItem {
  /**
   * Create a TestReportFeaturesItemTestsItemRunsItemStepsItemStepExecutionsItem.
   * @member {string} [deviceSnapshotId]
   * @member {string} [status]
   * @member {number} [timestamp]
   */
  constructor() {
  }

  /**
   * Defines the metadata of TestReportFeaturesItemTestsItemRunsItemStepsItemStepExecutionsItem
   *
   * @returns {object} metadata of TestReportFeaturesItemTestsItemRunsItemStepsItemStepExecutionsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TestReport_featuresItem_testsItem_runsItem_stepsItem_stepExecutionsItem',
      type: {
        name: 'Composite',
        className: 'TestReportFeaturesItemTestsItemRunsItemStepsItemStepExecutionsItem',
        modelProperties: {
          deviceSnapshotId: {
            required: false,
            serializedName: 'device_snapshot_id',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          timestamp: {
            required: false,
            serializedName: 'timestamp',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = TestReportFeaturesItemTestsItemRunsItemStepsItemStepExecutionsItem;
