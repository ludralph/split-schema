import * as runtime from '@prisma/client/runtime/library';
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result
import { 
    AtLeast,
    Extends,
    Has,
    Or,
    GetScalarType, 
    SortOrder, 
    BatchPayload,
    FieldRef,
    False,
    Keys,
    ExcludeUnderscoreKeys,
    Subset, 
    SelectSubset,
    InputJsonValue,
    JsonNullValueInput,
    JsonFilter,
    StringFilter,
    IntFilter,
    StringFieldUpdateOperationsInput,
    IntFieldUpdateOperationsInput,
    JsonWithAggregatesFilter,
    StringWithAggregatesFilter,
    IntWithAggregatesFilter,
    JsonValue,
    PrismaPromise,
    PickEnumerable,
    TypeMap,
    SubsetIntersection,
    True,
    MaybeTupleToUnion,
    GetHavingFields,
    XOR,


 } from "./utils"

export type client_user_session_note = $Result.DefaultSelection<$client_user_session_notePayload>


/**
   * Model client_user_session_note
   */

export type AggregateClient_user_session_note = {
    _count: Client_user_session_noteCountAggregateOutputType | null
    _avg: Client_user_session_noteAvgAggregateOutputType | null
    _sum: Client_user_session_noteSumAggregateOutputType | null
    _min: Client_user_session_noteMinAggregateOutputType | null
    _max: Client_user_session_noteMaxAggregateOutputType | null
  }

  export type Client_user_session_noteAvgAggregateOutputType = {
    id: number | null
  }

  export type Client_user_session_noteSumAggregateOutputType = {
    id: number | null
  }

  export type Client_user_session_noteMinAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_user_session_noteMaxAggregateOutputType = {
    id: number | null
    domain: string | null
  }

  export type Client_user_session_noteCountAggregateOutputType = {
    id: number
    domain: number
    props: number
    groups: number
    _all: number
  }


  export type Client_user_session_noteAvgAggregateInputType = {
    id?: true
  }

  export type Client_user_session_noteSumAggregateInputType = {
    id?: true
  }

  export type Client_user_session_noteMinAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_user_session_noteMaxAggregateInputType = {
    id?: true
    domain?: true
  }

  export type Client_user_session_noteCountAggregateInputType = {
    id?: true
    domain?: true
    props?: true
    groups?: true
    _all?: true
  }

  export type Client_user_session_noteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_user_session_note to aggregate.
     */
    where?: client_user_session_noteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_user_session_notes to fetch.
     */
    orderBy?: client_user_session_noteOrderByWithRelationInput | client_user_session_noteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: client_user_session_noteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_user_session_notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_user_session_notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned client_user_session_notes
    **/
    _count?: true | Client_user_session_noteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Client_user_session_noteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Client_user_session_noteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Client_user_session_noteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Client_user_session_noteMaxAggregateInputType
  }

  export type GetClient_user_session_noteAggregateType<T extends Client_user_session_noteAggregateArgs> = {
        [P in keyof T & keyof AggregateClient_user_session_note]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient_user_session_note[P]>
      : GetScalarType<T[P], AggregateClient_user_session_note[P]>
  }




  export type client_user_session_noteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: client_user_session_noteWhereInput
    orderBy?: client_user_session_noteOrderByWithAggregationInput | client_user_session_noteOrderByWithAggregationInput[]
    by: Client_user_session_noteScalarFieldEnum[] | Client_user_session_noteScalarFieldEnum
    having?: client_user_session_noteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Client_user_session_noteCountAggregateInputType | true
    _avg?: Client_user_session_noteAvgAggregateInputType
    _sum?: Client_user_session_noteSumAggregateInputType
    _min?: Client_user_session_noteMinAggregateInputType
    _max?: Client_user_session_noteMaxAggregateInputType
  }

  export type Client_user_session_noteGroupByOutputType = {
    id: number
    domain: string
    props:  JsonValue
    groups: JsonValue
    _count: Client_user_session_noteCountAggregateOutputType | null
    _avg: Client_user_session_noteAvgAggregateOutputType | null
    _sum: Client_user_session_noteSumAggregateOutputType | null
    _min: Client_user_session_noteMinAggregateOutputType | null
    _max: Client_user_session_noteMaxAggregateOutputType | null
  }

  type GetClient_user_session_noteGroupByPayload<T extends client_user_session_noteGroupByArgs> = PrismaPromise<
    Array<
      PickEnumerable<Client_user_session_noteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Client_user_session_noteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Client_user_session_noteGroupByOutputType[P]>
            : GetScalarType<T[P], Client_user_session_noteGroupByOutputType[P]>
        }
      >
    >


  export type client_user_session_noteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }, ExtArgs["result"]["client_user_session_note"]>

  export type client_user_session_noteSelectScalar = {
    id?: boolean
    domain?: boolean
    props?: boolean
    groups?: boolean
  }


  export type $client_user_session_notePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "client_user_session_note"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      domain: string
      props: JsonValue
      groups:JsonValue
    }, ExtArgs["result"]["client_user_session_note"]>
    composites: {}
  }


  type client_user_session_noteGetPayload<S extends boolean | null | undefined | client_user_session_noteDefaultArgs> = $Result.GetResult<$client_user_session_notePayload, S>

  type client_user_session_noteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<client_user_session_noteFindManyArgs, 'select' | 'include'> & {
      select?: Client_user_session_noteCountAggregateInputType | true
    }

  export interface client_user_session_noteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: TypeMap<ExtArgs>['model']['client_user_session_note'], meta: { name: 'client_user_session_note' } }
    /**
     * Find zero or one Client_user_session_note that matches the filter.
     * @param {client_user_session_noteFindUniqueArgs} args - Arguments to find a Client_user_session_note
     * @example
     * // Get one Client_user_session_note
     * const client_user_session_note = await prisma.client_user_session_note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends client_user_session_noteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, client_user_session_noteFindUniqueArgs<ExtArgs>>
    ): Prisma__client_user_session_noteClient<$Result.GetResult<$client_user_session_notePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client_user_session_note that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {client_user_session_noteFindUniqueOrThrowArgs} args - Arguments to find a Client_user_session_note
     * @example
     * // Get one Client_user_session_note
     * const client_user_session_note = await prisma.client_user_session_note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends client_user_session_noteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_user_session_noteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__client_user_session_noteClient<$Result.GetResult<$client_user_session_notePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Client_user_session_note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_user_session_noteFindFirstArgs} args - Arguments to find a Client_user_session_note
     * @example
     * // Get one Client_user_session_note
     * const client_user_session_note = await prisma.client_user_session_note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends client_user_session_noteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, client_user_session_noteFindFirstArgs<ExtArgs>>
    ): Prisma__client_user_session_noteClient<$Result.GetResult<$client_user_session_notePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Client_user_session_note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_user_session_noteFindFirstOrThrowArgs} args - Arguments to find a Client_user_session_note
     * @example
     * // Get one Client_user_session_note
     * const client_user_session_note = await prisma.client_user_session_note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends client_user_session_noteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, client_user_session_noteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__client_user_session_noteClient<$Result.GetResult<$client_user_session_notePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Client_user_session_notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_user_session_noteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Client_user_session_notes
     * const client_user_session_notes = await prisma.client_user_session_note.findMany()
     * 
     * // Get first 10 Client_user_session_notes
     * const client_user_session_notes = await prisma.client_user_session_note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const client_user_session_noteWithIdOnly = await prisma.client_user_session_note.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends client_user_session_noteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_user_session_noteFindManyArgs<ExtArgs>>
    ): PrismaPromise<$Result.GetResult<$client_user_session_notePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Client_user_session_note.
     * @param {client_user_session_noteCreateArgs} args - Arguments to create a Client_user_session_note.
     * @example
     * // Create one Client_user_session_note
     * const Client_user_session_note = await prisma.client_user_session_note.create({
     *   data: {
     *     // ... data to create a Client_user_session_note
     *   }
     * })
     * 
    **/
    create<T extends client_user_session_noteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, client_user_session_noteCreateArgs<ExtArgs>>
    ): Prisma__client_user_session_noteClient<$Result.GetResult<$client_user_session_notePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Client_user_session_notes.
     *     @param {client_user_session_noteCreateManyArgs} args - Arguments to create many Client_user_session_notes.
     *     @example
     *     // Create many Client_user_session_notes
     *     const client_user_session_note = await prisma.client_user_session_note.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends client_user_session_noteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_user_session_noteCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Client_user_session_note.
     * @param {client_user_session_noteDeleteArgs} args - Arguments to delete one Client_user_session_note.
     * @example
     * // Delete one Client_user_session_note
     * const Client_user_session_note = await prisma.client_user_session_note.delete({
     *   where: {
     *     // ... filter to delete one Client_user_session_note
     *   }
     * })
     * 
    **/
    delete<T extends client_user_session_noteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, client_user_session_noteDeleteArgs<ExtArgs>>
    ): Prisma__client_user_session_noteClient<$Result.GetResult<$client_user_session_notePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Client_user_session_note.
     * @param {client_user_session_noteUpdateArgs} args - Arguments to update one Client_user_session_note.
     * @example
     * // Update one Client_user_session_note
     * const client_user_session_note = await prisma.client_user_session_note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends client_user_session_noteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, client_user_session_noteUpdateArgs<ExtArgs>>
    ): Prisma__client_user_session_noteClient<$Result.GetResult<$client_user_session_notePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Client_user_session_notes.
     * @param {client_user_session_noteDeleteManyArgs} args - Arguments to filter Client_user_session_notes to delete.
     * @example
     * // Delete a few Client_user_session_notes
     * const { count } = await prisma.client_user_session_note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends client_user_session_noteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, client_user_session_noteDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Client_user_session_notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_user_session_noteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Client_user_session_notes
     * const client_user_session_note = await prisma.client_user_session_note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends client_user_session_noteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, client_user_session_noteUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Client_user_session_note.
     * @param {client_user_session_noteUpsertArgs} args - Arguments to update or create a Client_user_session_note.
     * @example
     * // Update or create a Client_user_session_note
     * const client_user_session_note = await prisma.client_user_session_note.upsert({
     *   create: {
     *     // ... data to create a Client_user_session_note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client_user_session_note we want to update
     *   }
     * })
    **/
    upsert<T extends client_user_session_noteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, client_user_session_noteUpsertArgs<ExtArgs>>
    ): Prisma__client_user_session_noteClient<$Result.GetResult<$client_user_session_notePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Client_user_session_notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_user_session_noteCountArgs} args - Arguments to filter Client_user_session_notes to count.
     * @example
     * // Count the number of Client_user_session_notes
     * const count = await prisma.client_user_session_note.count({
     *   where: {
     *     // ... the filter for the Client_user_session_notes we want to count
     *   }
     * })
    **/
    count<T extends client_user_session_noteCountArgs>(
      args?: Subset<T, client_user_session_noteCountArgs>,
    ): PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Client_user_session_noteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client_user_session_note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Client_user_session_noteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Client_user_session_noteAggregateArgs>(args: Subset<T, Client_user_session_noteAggregateArgs>): PrismaPromise<GetClient_user_session_noteAggregateType<T>>

    /**
     * Group by Client_user_session_note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {client_user_session_noteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends client_user_session_noteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: client_user_session_noteGroupByArgs['orderBy'] }
        : { orderBy?: client_user_session_noteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, client_user_session_noteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClient_user_session_noteGroupByPayload<T> : PrismaPromise<InputErrors>
  /**
   * Fields of the client_user_session_note model
   */
  readonly fields: client_user_session_noteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client_user_session_note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__client_user_session_noteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the client_user_session_note model
   */ 
  interface client_user_session_noteFieldRefs {
    readonly id: FieldRef<"client_user_session_note", 'Int'>
    readonly domain: FieldRef<"client_user_session_note", 'String'>
    readonly props: FieldRef<"client_user_session_note", 'Json'>
    readonly groups: FieldRef<"client_user_session_note", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * client_user_session_note findUnique
   */
  export type client_user_session_noteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_user_session_note
     */
    select?: client_user_session_noteSelect<ExtArgs> | null
    /**
     * Filter, which client_user_session_note to fetch.
     */
    where: client_user_session_noteWhereUniqueInput
  }


  /**
   * client_user_session_note findUniqueOrThrow
   */
  export type client_user_session_noteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_user_session_note
     */
    select?: client_user_session_noteSelect<ExtArgs> | null
    /**
     * Filter, which client_user_session_note to fetch.
     */
    where: client_user_session_noteWhereUniqueInput
  }


  /**
   * client_user_session_note findFirst
   */
  export type client_user_session_noteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_user_session_note
     */
    select?: client_user_session_noteSelect<ExtArgs> | null
    /**
     * Filter, which client_user_session_note to fetch.
     */
    where?: client_user_session_noteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_user_session_notes to fetch.
     */
    orderBy?: client_user_session_noteOrderByWithRelationInput | client_user_session_noteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_user_session_notes.
     */
    cursor?: client_user_session_noteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_user_session_notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_user_session_notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_user_session_notes.
     */
    distinct?: Client_user_session_noteScalarFieldEnum | Client_user_session_noteScalarFieldEnum[]
  }


  /**
   * client_user_session_note findFirstOrThrow
   */
  export type client_user_session_noteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_user_session_note
     */
    select?: client_user_session_noteSelect<ExtArgs> | null
    /**
     * Filter, which client_user_session_note to fetch.
     */
    where?: client_user_session_noteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_user_session_notes to fetch.
     */
    orderBy?: client_user_session_noteOrderByWithRelationInput | client_user_session_noteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for client_user_session_notes.
     */
    cursor?: client_user_session_noteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_user_session_notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_user_session_notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of client_user_session_notes.
     */
    distinct?: Client_user_session_noteScalarFieldEnum | Client_user_session_noteScalarFieldEnum[]
  }


  /**
   * client_user_session_note findMany
   */
  export type client_user_session_noteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_user_session_note
     */
    select?: client_user_session_noteSelect<ExtArgs> | null
    /**
     * Filter, which client_user_session_notes to fetch.
     */
    where?: client_user_session_noteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of client_user_session_notes to fetch.
     */
    orderBy?: client_user_session_noteOrderByWithRelationInput | client_user_session_noteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing client_user_session_notes.
     */
    cursor?: client_user_session_noteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` client_user_session_notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` client_user_session_notes.
     */
    skip?: number
    distinct?: Client_user_session_noteScalarFieldEnum | Client_user_session_noteScalarFieldEnum[]
  }


  /**
   * client_user_session_note create
   */
  export type client_user_session_noteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_user_session_note
     */
    select?: client_user_session_noteSelect<ExtArgs> | null
    /**
     * The data needed to create a client_user_session_note.
     */
    data: XOR<client_user_session_noteCreateInput, client_user_session_noteUncheckedCreateInput>
  }


  /**
   * client_user_session_note createMany
   */
  export type client_user_session_noteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many client_user_session_notes.
     */
    data: client_user_session_noteCreateManyInput | client_user_session_noteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * client_user_session_note update
   */
  export type client_user_session_noteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_user_session_note
     */
    select?: client_user_session_noteSelect<ExtArgs> | null
    /**
     * The data needed to update a client_user_session_note.
     */
    data: XOR<client_user_session_noteUpdateInput, client_user_session_noteUncheckedUpdateInput>
    /**
     * Choose, which client_user_session_note to update.
     */
    where: client_user_session_noteWhereUniqueInput
  }


  /**
   * client_user_session_note updateMany
   */
  export type client_user_session_noteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update client_user_session_notes.
     */
    data: XOR<client_user_session_noteUpdateManyMutationInput, client_user_session_noteUncheckedUpdateManyInput>
    /**
     * Filter which client_user_session_notes to update
     */
    where?: client_user_session_noteWhereInput
  }


  /**
   * client_user_session_note upsert
   */
  export type client_user_session_noteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_user_session_note
     */
    select?: client_user_session_noteSelect<ExtArgs> | null
    /**
     * The filter to search for the client_user_session_note to update in case it exists.
     */
    where: client_user_session_noteWhereUniqueInput
    /**
     * In case the client_user_session_note found by the `where` argument doesn't exist, create a new client_user_session_note with this data.
     */
    create: XOR<client_user_session_noteCreateInput, client_user_session_noteUncheckedCreateInput>
    /**
     * In case the client_user_session_note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<client_user_session_noteUpdateInput, client_user_session_noteUncheckedUpdateInput>
  }


  /**
   * client_user_session_note delete
   */
  export type client_user_session_noteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_user_session_note
     */
    select?: client_user_session_noteSelect<ExtArgs> | null
    /**
     * Filter which client_user_session_note to delete.
     */
    where: client_user_session_noteWhereUniqueInput
  }


  /**
   * client_user_session_note deleteMany
   */
  export type client_user_session_noteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client_user_session_notes to delete
     */
    where?: client_user_session_noteWhereInput
  }


  /**
   * client_user_session_note without action
   */
  export type client_user_session_noteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client_user_session_note
     */
    select?: client_user_session_noteSelect<ExtArgs> | null
  }

  /**
   * Deep Input Types
   */


  export type client_user_session_noteWhereInput = {
    AND?: client_user_session_noteWhereInput | client_user_session_noteWhereInput[]
    OR?: client_user_session_noteWhereInput[]
    NOT?: client_user_session_noteWhereInput | client_user_session_noteWhereInput[]
    id?: IntFilter<"client_user_session_note"> | number
    domain?: StringFilter<"client_user_session_note"> | string
    props?: JsonFilter<"client_user_session_note">
    groups?: JsonFilter<"client_user_session_note">
  }

  export type client_user_session_noteOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_user_session_noteWhereUniqueInput = AtLeast<{
    id?: number
    domain?: string
    AND?: client_user_session_noteWhereInput | client_user_session_noteWhereInput[]
    OR?: client_user_session_noteWhereInput[]
    NOT?: client_user_session_noteWhereInput | client_user_session_noteWhereInput[]
    props?: JsonFilter<"client_user_session_note">
    groups?: JsonFilter<"client_user_session_note">
  }, "id" | "domain">

  export type client_user_session_noteOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
    _count?: client_user_session_noteCountOrderByAggregateInput
    _avg?: client_user_session_noteAvgOrderByAggregateInput
    _max?: client_user_session_noteMaxOrderByAggregateInput
    _min?: client_user_session_noteMinOrderByAggregateInput
    _sum?: client_user_session_noteSumOrderByAggregateInput
  }

  export type client_user_session_noteScalarWhereWithAggregatesInput = {
    AND?: client_user_session_noteScalarWhereWithAggregatesInput | client_user_session_noteScalarWhereWithAggregatesInput[]
    OR?: client_user_session_noteScalarWhereWithAggregatesInput[]
    NOT?: client_user_session_noteScalarWhereWithAggregatesInput | client_user_session_noteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"client_user_session_note"> | number
    domain?: StringWithAggregatesFilter<"client_user_session_note"> | string
    props?: JsonWithAggregatesFilter<"client_user_session_note">
    groups?: JsonWithAggregatesFilter<"client_user_session_note">
  }

  export type client_user_session_noteCreateInput = {
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_user_session_noteUncheckedCreateInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_user_session_noteUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_user_session_noteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_user_session_noteCreateManyInput = {
    id?: number
    domain: string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_user_session_noteUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_user_session_noteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    props?: JsonNullValueInput | InputJsonValue
    groups?: JsonNullValueInput | InputJsonValue
  }

  export type client_user_session_noteCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    props?: SortOrder
    groups?: SortOrder
  }

  export type client_user_session_noteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type client_user_session_noteMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_user_session_noteMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
  }

  export type client_user_session_noteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use client_user_session_noteDefaultArgs instead
     */
    export type client_user_session_noteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = client_user_session_noteDefaultArgs<ExtArgs>

    export const Client_user_session_noteScalarFieldEnum: {
        id: 'id',
        domain: 'domain',
        props: 'props',
        groups: 'groups'
      };
    
export type Client_user_session_noteScalarFieldEnum = (typeof Client_user_session_noteScalarFieldEnum)[keyof typeof Client_user_session_noteScalarFieldEnum]
    