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


import * as runtime from '../runtime';
import type {
  Person,
} from '../models/index';
import {
    PersonFromJSON,
    PersonToJSON,
} from '../models/index';

export interface CreateRequest {
    person: Person;
}

export interface DeletePersonRequest {
    id: number;
}

export interface GetPersonByIdRequest {
    id: number;
}

export interface UpdatePersonRequest {
    id: number;
    person: Person;
}

/**
 * 
 */
export class PersonControllerApi extends runtime.BaseAPI {

    /**
     */
    async createRaw(requestParameters: CreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Person>> {
        if (requestParameters['person'] == null) {
            throw new runtime.RequiredError(
                'person',
                'Required parameter "person" was null or undefined when calling create().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/persons`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PersonToJSON(requestParameters['person']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PersonFromJSON(jsonValue));
    }

    /**
     */
    async create(requestParameters: CreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Person> {
        const response = await this.createRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deletePersonRaw(requestParameters: DeletePersonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deletePerson().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/persons/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deletePerson(requestParameters: DeletePersonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePersonRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getPersonByIdRaw(requestParameters: GetPersonByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Person>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPersonById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/persons/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PersonFromJSON(jsonValue));
    }

    /**
     */
    async getPersonById(requestParameters: GetPersonByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Person> {
        const response = await this.getPersonByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async readRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Person>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/v1/persons`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PersonFromJSON));
    }

    /**
     */
    async read(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Person>> {
        const response = await this.readRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async updatePersonRaw(requestParameters: UpdatePersonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Person>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updatePerson().'
            );
        }

        if (requestParameters['person'] == null) {
            throw new runtime.RequiredError(
                'person',
                'Required parameter "person" was null or undefined when calling updatePerson().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/persons/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PersonToJSON(requestParameters['person']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PersonFromJSON(jsonValue));
    }

    /**
     */
    async updatePerson(requestParameters: UpdatePersonRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Person> {
        const response = await this.updatePersonRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
