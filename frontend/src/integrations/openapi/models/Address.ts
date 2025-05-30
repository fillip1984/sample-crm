/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * 
     * @type {number}
     * @memberof Address
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    addressLine1: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    addressLine2?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    city: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    state: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    zipCode: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    country: string;
}

/**
 * Check if a given object implements the Address interface.
 */
export function instanceOfAddress(value: object): value is Address {
    if (!('addressLine1' in value) || value['addressLine1'] === undefined) return false;
    if (!('city' in value) || value['city'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    if (!('zipCode' in value) || value['zipCode'] === undefined) return false;
    if (!('country' in value) || value['country'] === undefined) return false;
    return true;
}

export function AddressFromJSON(json: any): Address {
    return AddressFromJSONTyped(json, false);
}

export function AddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): Address {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'addressLine1': json['addressLine1'],
        'addressLine2': json['addressLine2'] == null ? undefined : json['addressLine2'],
        'city': json['city'],
        'state': json['state'],
        'zipCode': json['zipCode'],
        'country': json['country'],
    };
}

export function AddressToJSON(json: any): Address {
    return AddressToJSONTyped(json, false);
}

export function AddressToJSONTyped(value?: Address | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'addressLine1': value['addressLine1'],
        'addressLine2': value['addressLine2'],
        'city': value['city'],
        'state': value['state'],
        'zipCode': value['zipCode'],
        'country': value['country'],
    };
}

