/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ModelFetchWindow } from './ModelFetchWindow';
import {
    ModelFetchWindowFromJSON,
    ModelFetchWindowFromJSONTyped,
    ModelFetchWindowToJSON,
} from './ModelFetchWindow';

/**
 * 
 * @export
 * @interface ReportersLookupFilter
 */
export interface ReportersLookupFilter {
    /**
     * 
     * @type {Array<string>}
     * @memberof ReportersLookupFilter
     */
    in_field_filter: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReportersLookupFilter
     */
    node_ids: Array<string> | null;
    /**
     * 
     * @type {ModelFetchWindow}
     * @memberof ReportersLookupFilter
     */
    window: ModelFetchWindow;
}

/**
 * Check if a given object implements the ReportersLookupFilter interface.
 */
export function instanceOfReportersLookupFilter(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "in_field_filter" in value;
    isInstance = isInstance && "node_ids" in value;
    isInstance = isInstance && "window" in value;

    return isInstance;
}

export function ReportersLookupFilterFromJSON(json: any): ReportersLookupFilter {
    return ReportersLookupFilterFromJSONTyped(json, false);
}

export function ReportersLookupFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportersLookupFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'in_field_filter': json['in_field_filter'],
        'node_ids': json['node_ids'],
        'window': ModelFetchWindowFromJSON(json['window']),
    };
}

export function ReportersLookupFilterToJSON(value?: ReportersLookupFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'in_field_filter': value.in_field_filter,
        'node_ids': value.node_ids,
        'window': ModelFetchWindowToJSON(value.window),
    };
}

