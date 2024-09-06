/// <reference types="node" />
import type { Core, Data } from '@strapi/types';
import type { HistoryVersions } from '../../../../shared/contracts';
import { CreateHistoryVersion, HistoryVersionDataResponse } from '../../../../shared/contracts/history-versions';
declare const createHistoryService: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    createVersion(historyVersionData: HistoryVersions.CreateHistoryVersion): Promise<void>;
    findVersionsPage(params: HistoryVersions.GetHistoryVersions.Request): Promise<{
        results: HistoryVersions.HistoryVersionDataResponse[];
        pagination: HistoryVersions.Pagination;
    }>;
    restoreVersion(versionId: Data.ID): Promise<import("@strapi/types/dist/modules/documents").AnyDocument>;
};
export { createHistoryService };
//# sourceMappingURL=history.d.ts.map