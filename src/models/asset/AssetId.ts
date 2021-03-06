/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 NEM
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {MosaicIdDTO} from "../../infrastructure/asset/MosaicIdDTO";
/**
 *
 * A asset id uniquely identifies an underlying asset definition.
 */
export class AssetId {

  /**
   * The corresponding namespace id
   */
  public readonly namespaceId: string;

  /**
   * The name of the mosaic definition.
   */
  public readonly name: string;

  /**
   * constructor
   * @param namespaceId
   * @param name
   */
  constructor(
    namespaceId: string,
    name: string,
  ) {
    this.namespaceId = namespaceId;
    this.name = name;
  }

  public toString(): string {
    return this.description();
  }

  /**
   * @internal
   * @returns {{name: string, namespaceId: string}}
   */
  public toDTO(): MosaicIdDTO {
    return {
      name: this.name,
      namespaceId: this.namespaceId,
    };
  }

  /**
   * @internal
   * @param dto
   * @returns {AssetId}
   */
  public static createFromMosaicIdDTO(dto: MosaicIdDTO): AssetId {
    return new AssetId(dto.namespaceId, dto.name);
  }

  /**
   * Compares mosaicIds for equality
   * @param mosaicId
   * @returns {boolean}
   */
  public equals(mosaicId: AssetId): boolean {
    return this.namespaceId == mosaicId.namespaceId && this.name == mosaicId.name;
  }

  /**
   * Asset Id description in format namespaceId:name ex: nem:xem
   */
  public description(): string {
    return this.namespaceId + ":" + this.name;
  }
}
