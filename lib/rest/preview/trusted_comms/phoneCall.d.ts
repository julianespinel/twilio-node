/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import TrustedComms = require('../TrustedComms');
import { SerializableClass } from '../../../interfaces';

/**
 * Initialize the PhoneCallList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function PhoneCallList(version: TrustedComms): PhoneCallListInstance;

interface PhoneCallListInstance {
  /**
   * create a PhoneCallInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: PhoneCallListInstanceCreateOptions, callback?: (error: Error | null, item: PhoneCallInstance) => any): Promise<PhoneCallInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property from - The originating Phone Number
 * @property reason - The business reason for this phone call
 * @property to - The terminating Phone Number
 * @property url - The Twiml URL
 */
interface PhoneCallListInstanceCreateOptions {
  from: string;
  reason?: string;
  to: string;
  url: string;
}

interface PhoneCallPayload extends PhoneCallResource, Page.TwilioResponsePayload {
}

interface PhoneCallResource {
  account_sid: string;
  created_at: Date;
  from: string;
  reason: string;
  sid: string;
  to: string;
  url: string;
}

interface PhoneCallSolution {
}


declare class PhoneCallInstance extends SerializableClass {
  /**
   * Initialize the PhoneCallContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: TrustedComms, payload: PhoneCallPayload);

  accountSid: string;
  createdAt: Date;
  from: string;
  reason: string;
  sid: string;
  to: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class PhoneCallPage extends Page<TrustedComms, PhoneCallPayload, PhoneCallResource, PhoneCallInstance> {
  /**
   * Initialize the PhoneCallPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: TrustedComms, response: Response<string>, solution: PhoneCallSolution);

  /**
   * Build an instance of PhoneCallInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: PhoneCallPayload): PhoneCallInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { PhoneCallInstance, PhoneCallList, PhoneCallListInstance, PhoneCallListInstanceCreateOptions, PhoneCallPage, PhoneCallPayload, PhoneCallResource, PhoneCallSolution }
